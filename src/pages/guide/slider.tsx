import { useState } from "react";
import FlavorSlider from "@/components/common/slider/FlavorSlider";
import DualSlider from "@/components/common/slider/DualSlider";

export default function RangeSliderGuidePage() {
  const [price, setPrice] = useState(50);
  const [range, setRange] = useState<[number, number]>([20000, 50000]);

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-xl font-semibold">Slider 컴포넌트 가이드</h1>

      {/* 단일 값 슬라이더 (FlavorSlider) */}
      <section className="space-y-4">
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
          badgeLabel="당도"
        />

        <div className="pt-2">
          <h3 className="text-sm font-semibold">📌 Props 설명</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>
              <code>value</code>: 현재 선택된 숫자 값 (number)
            </li>
            <li>
              <code>onChange</code>: 슬라이더 값 변경 시 호출되는 콜백 (value:
              number)
            </li>
            <li>
              <code>min</code>: 최소값 (선택, 기본값 0)
            </li>
            <li>
              <code>max</code>: 최대값 (선택, 기본값 100)
            </li>
            <li>
              <code>step</code>: 슬라이더 이동 단위 (선택, 기본값 1)
            </li>
            <li>
              <code>labelLeft</code>: 왼쪽 라벨 텍스트
            </li>
            <li>
              <code>labelRight</code>: 오른쪽 라벨 텍스트
            </li>
            <li>
              <code>badgeLabel</code>: 뱃지에 표시할 텍스트
            </li>
          </ul>
        </div>

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
  badgeLabel="당도"
/>`}
          </code>
        </pre>
      </section>

      {/* 범위 값 슬라이더 (DualSlider) */}
      <section className="space-y-4">
        <h2 className="text-lg font-medium pt-6">DualSlider (범위 슬라이더)</h2>

        <DualSlider
          value={range}
          onChange={setRange}
          min={0}
          max={100000}
          step={1000}
        />

        <div className="pt-2">
          <h3 className="text-sm font-semibold">📌 Props 설명</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>
              <code>value</code>: 현재 선택된 범위 값 ([min, max] 형태의 배열)
            </li>
            <li>
              <code>onChange</code>: 범위 변경 시 호출되는 콜백 (value: [number,
              number])
            </li>
            <li>
              <code>min</code>: 선택 가능 최소값
            </li>
            <li>
              <code>max</code>: 선택 가능 최대값
            </li>
            <li>
              <code>step</code>: 이동 단위 (선택)
            </li>
          </ul>
        </div>

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
