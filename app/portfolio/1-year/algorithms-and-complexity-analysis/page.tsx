'use client'

import Accordion from "react-bootstrap/Accordion";

export default function AlgorithmsAndAnalysis() {
  return (
    <div className='flex flex-col items-center'>
      <h3 className='mb-5'>Алгоритмы и Анализ сложности</h3>
      <div className='w-1/2'>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Задание 1</Accordion.Header>
            <Accordion.Body className='text-green-500 bg-black'>
              <p>Линейные рекуррентные соотношения первого порядка с переменным коэффициентом.</p>
              <p>Квазилинейные рекуррентные соотношения первого порядка.</p>
              <br/>
              <br/>
              <a className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600"
                 href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fvah2w70OIN2JAwtFlqO9EzzuQ0bpVfq3z3bkE%2BWyncypmOtfui8U2ec0OLRkKdJRq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F1%20%D0%BA%D1%83%D1%80%D1%81%2F%D0%90%D0%BD%D0%B0%D0%BB%D0%B8%D0%B7%20%D1%81%D0%BB%D0%BE%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D0%B5%D0%B9%2F%D0%90%D0%B8%D0%90%D0%A1%20%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5%201%20%D0%98%D0%92%D0%A2(2)%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C.%D0%94..pdf&name=%D0%90%D0%B8%D0%90%D0%A1%20%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5%201%20%D0%98%D0%92%D0%A2(2)%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C.%D0%94..pdf&nosw=1" target="_blank">Решение</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Задание 2</Accordion.Header>
            <Accordion.Body className='text-green-500 bg-black'>
              <p>Определение скорости работы алгоритмов.</p>
              <br/>
              <br/>
              <a className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600"
                 href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fvah2w70OIN2JAwtFlqO9EzzuQ0bpVfq3z3bkE%2BWyncypmOtfui8U2ec0OLRkKdJRq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F1%20%D0%BA%D1%83%D1%80%D1%81%2F%D0%90%D0%BD%D0%B0%D0%BB%D0%B8%D0%B7%20%D1%81%D0%BB%D0%BE%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D0%B5%D0%B9%2F%D0%90%D0%B8%D0%90%D0%A1%20%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5%202%20%D0%98%D0%92%D0%A2(2)%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C.%D0%94..pdf&name=%D0%90%D0%B8%D0%90%D0%A1%20%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5%202%20%D0%98%D0%92%D0%A2(2)%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C.%D0%94..pdf" target="_blank">Решение</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Контрольная работа 1</Accordion.Header>
            <Accordion.Body className='text-green-500 bg-black'>
              <p>1) Решите линейные рекуррентные соотношения первого порядка
                с постоянным коэффициентом (n ≥ 1)</p>

              <p>2) Время работы алгоритма a и b описывается рекуррентным соотношением.
                Какой из алгоритмов асимптотически быстрее?</p>

              <p>3) Время работы алгоритма a и b описывается рекуррентным соотношением.
                Какой из алгоритмов асимптотически быстрее?</p>

              <p>4) Время работы алгоритма a и b описывается рекуррентным соотношением.
                При каком соотношении между a ∈ R и b ∈ R алгоритм b асимптотически
                быстрее алгоритма a.</p>
              <br/>
              <br/>
              <a className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600"
                 href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fvah2w70OIN2JAwtFlqO9EzzuQ0bpVfq3z3bkE%2BWyncypmOtfui8U2ec0OLRkKdJRq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F1%20%D0%BA%D1%83%D1%80%D1%81%2F%D0%90%D0%BD%D0%B0%D0%BB%D0%B8%D0%B7%20%D1%81%D0%BB%D0%BE%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D0%B5%D0%B9%2F%D0%9A%D0%A01%20%D0%90%D0%B8%D0%90%D0%A1%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C.%D0%94..pdf&name=%D0%9A%D0%A01%20%D0%90%D0%B8%D0%90%D0%A1%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C.%D0%94..pdf" target="_blank">Решение</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Контрольная работа 2</Accordion.Header>
            <Accordion.Body className='text-green-500 bg-black'>
              <p>Решение задач из списка</p>
              <br/>
              <br/>
              <a className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600"
                 href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fvah2w70OIN2JAwtFlqO9EzzuQ0bpVfq3z3bkE%2BWyncypmOtfui8U2ec0OLRkKdJRq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F1%20%D0%BA%D1%83%D1%80%D1%81%2F%D0%90%D0%BD%D0%B0%D0%BB%D0%B8%D0%B7%20%D1%81%D0%BB%D0%BE%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D0%B5%D0%B9%2F%D0%90%D0%B8%D0%90%D0%A1%20%D0%9A%D0%A02%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C.%D0%94.%20%D0%98%D0%92%D0%A2(2).pdf&name=%D0%90%D0%B8%D0%90%D0%A1%20%D0%9A%D0%A02%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C.%D0%94.%20%D0%98%D0%92%D0%A2(2).pdf&nosw=1" target="_blank">Решение</a>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  )
}
