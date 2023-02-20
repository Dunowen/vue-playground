import { defineStore } from "pinia";

export type CounterState = {
	count: number;
};

export const useCounterStore = defineStore("counter", {
	state: () =>
		({
			count: 0
		} as CounterState),
	getters: {
		getCurrent: (state: CounterState) => state.count
	},
	actions: {
		increase(): void {
			console.log("called");

			this.count += 1;
		}
	}
});
