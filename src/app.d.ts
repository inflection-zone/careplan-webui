/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	interface Locals {
		userid: string;
	}
	declare module '@fortawesome/pro-solid-svg-icons/index.es' {
		export * from '@fortawesome/pro-solid-svg-icons';
	  }

	// interface Platform {}

	// interface Session {}

	// interface Stuff {}
}
