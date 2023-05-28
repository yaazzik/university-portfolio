'use client'

import Accordion from "react-bootstrap/Accordion";

export default function FuncName() {
  return (
    <div className='flex flex-col items-center'>
      <h3 className='mb-5'>MainHeader</h3>
      <div className='w-1/2'>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Лабораторная работа 1-2</Accordion.Header>
            <Accordion.Body className='text-green-500 bg-black'>
              <p>Отличительные особенности IT рекрутмента</p>
              <br/>
              <br/>
              <a className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600"
                 href="https://docviewer.yandex.ru/view/814665032/?*=faiImuhg6XWxOLjtCVDuLbOEqq57InVybCI6InlhLWRpc2stcHVibGljOi8vdmFoMnc3ME9JTjJKQXd0RmxxTzlFenp1UTBicFZmcTN6M2JrRStXeW5jeXBtT3RmdWk4VTJlYzBPTFJrS2RKUnEvSjZicG1SeU9Kb25UM1ZvWG5EYWc9PTovSVQg0YDQtdC60YDRg9GC0LzQtdC90YIvSVQt0YDQtdC60YDRg9GC0LzQtdC90YIg0JvQsNCx0L7RgNCw0YLQvtGA0L3Ri9C1INGA0LDQsdC%2B0YLQsCAxLTIg0JPQu9C10LHQvtCyINCcLtCULi50eHQiLCJ0aXRsZSI6IklULdGA0LXQutGA0YPRgtC80LXQvdGCINCb0LDQsdC%2B0YDQsNGC0L7RgNC90YvQtSDRgNCw0LHQvtGC0LAgMS0yINCT0LvQtdCx0L7QsiDQnC7QlC4udHh0Iiwibm9pZnJhbWUiOmZhbHNlLCJ1aWQiOiI4MTQ2NjUwMzIiLCJ0cyI6MTY4NTI4MDc4NjY5NSwieXUiOiI2NTIwMzEwMjcxNjQ1MTIxNjczIn0%3D" target="_blank">Решение</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Лабораторная работа 3</Accordion.Header>
              <Accordion.Body className="text-green-500 bg-black">
                <p>Профессиональные стандарты</p>
                <br/>
                <br/>
                <a className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600"
                   href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fvah2w70OIN2JAwtFlqO9EzzuQ0bpVfq3z3bkE%2BWyncypmOtfui8U2ec0OLRkKdJRq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2FIT%20%D1%80%D0%B5%D0%BA%D1%80%D1%83%D1%82%D0%BC%D0%B5%D0%BD%D1%82%2FIT-%D1%80%D0%B5%D0%BA%D1%80%D1%83%D1%82%D0%BC%D0%B5%D0%BD%D1%82%20%D0%9B%D0%B0%D0%B1%D0%BE%D1%80%D0%B0%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%203%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C.%D0%94..docx&name=IT-%D1%80%D0%B5%D0%BA%D1%80%D1%83%D1%82%D0%BC%D0%B5%D0%BD%D1%82%20%D0%9B%D0%B0%D0%B1%D0%BE%D1%80%D0%B0%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%203%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C.%D0%94..docx&nosw=1" target="_blank">Решение</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Лабораторная работа 4</Accordion.Header>
              <Accordion.Body className="text-green-500 bg-black">
                <p>Интеллект-карты</p>
                <br/>
                <br/>
                <a className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600 mr-5"
                   href="https://disk.yandex.ru/d/4uBDjn_TcWZWGQ/IT%20%D1%80%D0%B5%D0%BA%D1%80%D1%83%D1%82%D0%BC%D0%B5%D0%BD%D1%82/%D0%98%D0%BD%D1%82%D0%B5%D0%BB%D0%BB%D0%B5%D0%BA%D1%82-%D0%BA%D0%B0%D1%80%D1%82%D0%B0%201.png" target="_blank">Решение</a>
                <a className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600"
                   href="https://disk.yandex.ru/d/4uBDjn_TcWZWGQ/IT%20%D1%80%D0%B5%D0%BA%D1%80%D1%83%D1%82%D0%BC%D0%B5%D0%BD%D1%82/%D0%98%D0%BD%D1%82%D0%B5%D0%BB%D0%BB%D0%B5%D0%BA%D1%82-%D0%BA%D0%B0%D1%80%D1%82%D0%B0%202.png" target="_blank">Решение</a>
              </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Лабораторная работа 5</Accordion.Header>
              <Accordion.Body className="text-green-500 bg-black">
                <p>Вакансия</p>
                <br/>
                <br/>
                <a className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600"
                   href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fvah2w70OIN2JAwtFlqO9EzzuQ0bpVfq3z3bkE%2BWyncypmOtfui8U2ec0OLRkKdJRq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2FIT%20%D1%80%D0%B5%D0%BA%D1%80%D1%83%D1%82%D0%BC%D0%B5%D0%BD%D1%82%2FIT-%D1%80%D0%B5%D0%BA%D1%80%D1%83%D1%82%D0%BC%D0%B5%D0%BD%D1%82%20%D0%9B%D0%B0%D0%B1%D0%BE%D1%80%D0%B0%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%205%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C%D0%94.pdf&name=IT-%D1%80%D0%B5%D0%BA%D1%80%D1%83%D1%82%D0%BC%D0%B5%D0%BD%D1%82%20%D0%9B%D0%B0%D0%B1%D0%BE%D1%80%D0%B0%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%205%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C%D0%94.pdf&nosw=1" target="_blank">Решение</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Лабораторная работа 6-7</Accordion.Header>
              <Accordion.Body className="text-green-500 bg-black">
                <p>HR-площадки</p>
                <br/>
                <br/>
                <a className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600"
                   href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fvah2w70OIN2JAwtFlqO9EzzuQ0bpVfq3z3bkE%2BWyncypmOtfui8U2ec0OLRkKdJRq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2FIT%20%D1%80%D0%B5%D0%BA%D1%80%D1%83%D1%82%D0%BC%D0%B5%D0%BD%D1%82%2FIT-%D1%80%D0%B5%D0%BA%D1%80%D1%83%D1%82%D0%BC%D0%B5%D0%BD%D1%82%20%D0%9B%D0%B0%D0%B1%D0%BE%D1%80%D0%B0%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%206-7%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C%D0%94.pdf&name=IT-%D1%80%D0%B5%D0%BA%D1%80%D1%83%D1%82%D0%BC%D0%B5%D0%BD%D1%82%20%D0%9B%D0%B0%D0%B1%D0%BE%D1%80%D0%B0%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%206-7%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C%D0%94.pdf&nosw=1" target="_blank">Решение</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Лабораторная работа 8-9</Accordion.Header>
              <Accordion.Body className="text-green-500 bg-black">
                <p>Презентация для собеседования</p>
                <br/>
                <br/>
                <a className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600"
                   href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fvah2w70OIN2JAwtFlqO9EzzuQ0bpVfq3z3bkE%2BWyncypmOtfui8U2ec0OLRkKdJRq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2FIT%20%D1%80%D0%B5%D0%BA%D1%80%D1%83%D1%82%D0%BC%D0%B5%D0%BD%D1%82%2FIT-%D1%80%D0%B5%D0%BA%D1%80%D1%83%D1%82%D0%BC%D0%B5%D0%BD%D1%82%20%D0%9B%D0%B0%D0%B1%D0%BE%D1%80%D0%B0%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%208-9%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C%D0%94.pptx&name=IT-%D1%80%D0%B5%D0%BA%D1%80%D1%83%D1%82%D0%BC%D0%B5%D0%BD%D1%82%20%D0%9B%D0%B0%D0%B1%D0%BE%D1%80%D0%B0%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%208-9%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C%D0%94.pptx&nosw=1" target="_blank">Решение</a>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  )
}
