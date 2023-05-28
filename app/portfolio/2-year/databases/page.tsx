'use client'

import Accordion from "react-bootstrap/Accordion";

export default function DataBases() {
  return (
    <div className='flex flex-col items-center'>
      <h3 className='mb-5'>Базы данных</h3>
      <div className='w-1/2'>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Лабораторная работа 1</Accordion.Header>
            <Accordion.Body className='text-green-500 bg-black'>
              <p>База данных пользователей.</p>
              <br/>
              <br/>
              <a className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600"
                 href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fvah2w70OIN2JAwtFlqO9EzzuQ0bpVfq3z3bkE%2BWyncypmOtfui8U2ec0OLRkKdJRq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F2%20%D0%BA%D1%83%D1%80%D1%81%2F%D0%91%D0%B0%D0%B7%D1%8B%20%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85%2F%D0%9E%D1%82%D1%87%D0%B5%D1%82%20%D0%91%D0%94%20%D0%9B%D1%801%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C.%D0%94..pdf&name=%D0%9E%D1%82%D1%87%D0%B5%D1%82%20%D0%91%D0%94%20%D0%9B%D1%801%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C.%D0%94..pdf&nosw=1" target="_blank">Решение</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Лабораторная работа 2</Accordion.Header>
              <Accordion.Body className="text-green-500 bg-black">
                <p>Организация базы данных для магазина спортивных товаров.</p>
                <br/>
                <br/>
                <a className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600"
                   href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fvah2w70OIN2JAwtFlqO9EzzuQ0bpVfq3z3bkE%2BWyncypmOtfui8U2ec0OLRkKdJRq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F2%20%D0%BA%D1%83%D1%80%D1%81%2F%D0%91%D0%B0%D0%B7%D1%8B%20%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85%2F%D0%9E%D1%82%D1%87%D0%B5%D1%82%20%D0%91%D0%94.pdf&name=%D0%9E%D1%82%D1%87%D0%B5%D1%82%20%D0%91%D0%94.pdf&nosw=1" target="_blank">Решение</a>
              </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Презентация 1</Accordion.Header>
              <Accordion.Body className="text-green-500 bg-black">
                <p>MySQL Workbench <br/>
                  PHPMyAdmin <br/>
                  Datagrip</p>
                <br/>
                <br/>
                <a className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600"
                   href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fvah2w70OIN2JAwtFlqO9EzzuQ0bpVfq3z3bkE%2BWyncypmOtfui8U2ec0OLRkKdJRq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F2%20%D0%BA%D1%83%D1%80%D1%81%2F%D0%91%D0%B0%D0%B7%D1%8B%20%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85%2F%D0%9B%D0%A0%2011%20%D0%91%D0%94%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C%D0%94.pptx&name=%D0%9B%D0%A0%2011%20%D0%91%D0%94%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C%D0%94.pptx" target="_blank">Решение</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Презентация 2</Accordion.Header>
            <Accordion.Body className="text-green-500 bg-black">
              <p>СУБД MySQL</p>
              <br/>
              <br/>
              <a className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600"
                 href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fvah2w70OIN2JAwtFlqO9EzzuQ0bpVfq3z3bkE%2BWyncypmOtfui8U2ec0OLRkKdJRq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F2%20%D0%BA%D1%83%D1%80%D1%81%2F%D0%91%D0%B0%D0%B7%D1%8B%20%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85%2F%D0%A1%D0%B0%D0%BC%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%20%E2%84%966%20(SQL%20%D0%BF%D1%80%D0%B5%D0%B7%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F-%D0%BA%D0%BE%D0%BD%D1%81%D0%BF%D0%B5%D0%BA%D1%82)%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C%D0%94.pptx&name=%D0%A1%D0%B0%D0%BC%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%20%E2%84%966%20(SQL%20%D0%BF%D1%80%D0%B5%D0%B7%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F-%D0%BA%D0%BE%D0%BD%D1%81%D0%BF%D0%B5%D0%BA%D1%82)%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C%D0%94.pptx" target="_blank">Решение</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Самостоятельная работа</Accordion.Header>
              <Accordion.Body className="text-green-500 bg-black">
                <p>Тип данных и объекты СУБД MySQL.</p>
                <br/>
                <br/>
                <a className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600"
                   href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fvah2w70OIN2JAwtFlqO9EzzuQ0bpVfq3z3bkE%2BWyncypmOtfui8U2ec0OLRkKdJRq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F2%20%D0%BA%D1%83%D1%80%D1%81%2F%D0%91%D0%B0%D0%B7%D1%8B%20%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85%2F%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C.%D0%94.%20%D0%98%D0%A1%D0%A0%201.1%20%D0%91%D0%94.docx&name=%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C.%D0%94.%20%D0%98%D0%A1%D0%A0%201.1%20%D0%91%D0%94.docx&nosw=1" target="_blank">Решение</a>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>Сертификат SQL</Accordion.Header>
              <Accordion.Body className="text-green-500 bg-black">
                <p>SQL</p>
                <p>This course covers an array of SQL-related topics, such as retrieving, updating and filtering data; functions and subqueries; creating & updating tables; & many more!</p>
                <br/>
                <br/>
                <a className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600"
                  href="https://www.sololearn.com/certificates/CT-L1LXI2G3" target="_blank">Sololearn</a>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  )
}
