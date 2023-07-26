/** @format */

interface Props {
  children: JSX.Element;
}

export const CardUI = ({ children }: Props): JSX.Element => {
  return (
    <div className="rounded border border-black border-solid p-2 inline-block">
      {children}
    </div>
  );
};
