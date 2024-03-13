type OmitKeys<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P];
};

type FormStepProps<T> = {
  defaultValues?: Partial<T>;
};

type PropsWithChildren<T = unknown> = T & { children: React.ReactNode };
type PropsWithOptionalChildren<T = unknown> = T & {
  children?: React.ReactNode;
};
