/** @format */

interface Props {
  title: string;
}

export const Tag = ({ title }: Props): JSX.Element => (
  <span className="rounded bg-[#efefff] p-[2px_4px]">{title}</span>
);
