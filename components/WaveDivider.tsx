// The thin gold wave line Aji uses at the foot of every section and banner.
export default function WaveDivider() {
  return (
    <svg className="wave-div" viewBox="0 0 600 28" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M0 14 Q37 0 75 14 T150 14 T225 14 T300 14 T375 14 T450 14 T525 14 T600 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
