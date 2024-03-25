import Link from "next/link";

export default function Tag({ tag }) {
  return (
    <Link
      key={tag}
      href={`/tags/${tag}`}
      className="bg-gray-200 p-2 rounded-md mr-2 text-xs hover:underline-offset-0"
    >
      {tag}
    </Link>
  );
}
