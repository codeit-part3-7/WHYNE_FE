import { useState } from "react";
import FlavorSlider from "@/components/common/FlavorSlider";
import DualSlider from "@/components/common/DualSlider";

export default function RangeSliderGuidePage() {
  const [price, setPrice] = useState(50);
  const [range, setRange] = useState<[number, number]>([20000, 50000]);

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-xl font-semibold">Slider 컴포넌트 가이드</h1>

      {/* 단일 값 슬라이더 (FlavorSlider) */}
      <section className="space-y-2">
        <h2 className="text-lg font-medium">FlavorSlider (단일 슬라이더)</h2>
        <p className="text-sm text-gray-600">선택된 값: {price}</p>
        <FlavorSlider
          value={price}
          onChange={setPrice}
          min={0}
          max={100}
          step={5}
          labelLeft="진해요"
          labelRight="가벼워요"
        />

        {/* 코드 예시 */}
        <pre className="mt-4 rounded bg-gray-100 p-4 text-sm overflow-auto text-gray-800">
          <code>
            {`<FlavorSlider
  value={price}
  onChange={setPrice}
  min={0}
  max={100}
  step={5}
  labelLeft="진해요"
  labelRight="가벼워요"
/>`}
          </code>
        </pre>
      </section>

      {/* 범위 값 슬라이더 */}
      <section className="space-y-2">
        <h2 className="text-lg font-medium py-6">DualSlider (범위 슬라이더)</h2>
        <DualSlider
          value={range}
          onChange={setRange}
          min={0}
          max={100000}
          step={1000}
        />

        {/* 코드 예시 */}
        <pre className="mt-4 rounded bg-gray-100 p-4 text-sm overflow-auto text-gray-800">
          <code>
            {`<DualSlider
  value={range}
  onChange={setRange}
  min={0}
  max={100000}
  step={1000}
/>`}
          </code>
        </pre>
      </section>
    </main>
  );
}
