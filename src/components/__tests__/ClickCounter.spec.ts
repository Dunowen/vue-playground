import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";

import ClickCounter from "../ClickCounter.vue";

describe("ClickCounter", async () => {
	let wrapper: VueWrapper<any>;

	beforeEach(() => {
		wrapper = mount(ClickCounter, {
			props: { date: new Date() },
			global: {
				plugins: [
					createTestingPinia({
						createSpy: vi.fn,
						stubActions: false
					})
				]
			}
		});
	});

	afterEach(() => {
		wrapper.unmount();
	});

	it("renders properly", () => {
		expect(wrapper.text()).toContain("Current date:");
		expect(wrapper.text()).toContain("Current count: 0");
	});

	it("should increase count after button click", async () => {
		expect(wrapper.text()).toContain("Current count: 0");

		const button = wrapper.find("button");
		await button.trigger("click");

		expect(wrapper.text()).toContain("Current count: 1");
	});
});
