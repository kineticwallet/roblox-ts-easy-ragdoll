declare type ConstraintsInfo = Record<string, ConstraintsInfo | number | string>;

declare interface Ragdoll {
	initTimeStamps(): void;
	rig(instance: Model, constraintsInfo?: ConstraintsInfo): RBXScriptConnection | undefined;
	ragdoll(ragdoll: boolean, instance: Model, duration?: number): void;
}

declare const EasyRagdoll: Ragdoll;

export = EasyRagdoll;
