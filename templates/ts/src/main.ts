export type Options = {
  text: string;
};

export default function foo({ text }: Options) {
  console.log(text);
}
