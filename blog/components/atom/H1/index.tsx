interface Props {
  children: React.ReactNode;
}

export function H1({ children, ...props }: Props) {
  return <h1 {...props}>{children}</h1>;
}
