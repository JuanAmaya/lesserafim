type MarqueeProps = {
  slideAnim: string;
};

export default function Marquee({ slideAnim }: MarqueeProps) {
  return (
    <div className="flex overflow-hidden select-none gap-8">
      <Anagram slideAnim={slideAnim} />
      <Anagram slideAnim={slideAnim} />
    </div>
  );
}

type AnagramProps = {
  slideAnim: string;
};

export function Anagram({ slideAnim }: AnagramProps) {
  return (
    <ul
      className={`${slideAnim} flex space-between gap-8 text-9xl whitespace-nowrap font-clash-semibold items-center shrink-0 min-w-full`}
    >
      <li>LE SSERAFIM</li>
      <li className="blur-sm">FE ARLESSIM</li>
      <li>IM FEARLESS</li>
      <li className="blur-sm">AR LESSIMFE</li>
    </ul>
  );
}
