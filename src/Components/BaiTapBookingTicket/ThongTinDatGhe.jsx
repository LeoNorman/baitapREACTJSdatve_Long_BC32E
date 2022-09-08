import React, { Component } from 'react'

export default class ThongTinDatVe extends Component {
  render() {
    return (
      <div>
        <div className='mt-5 text-left'>
          <button className='gheDuocChon'></button><span className='text-white ml-1' style={{ fontSize: '25px' }}>Ghế đã đặt</span>
          <br />
          <button className='gheDangChon'></button><span className='text-white ml-1' style={{ fontSize: '25px' }}>Ghế đang chọn</span>
          <br />
          <button className='ghe' style={{ marginLeft: '0px' }}></button><span className='text-white ml-1' style={{ fontSize: '25px' }}>Ghế chưa đặt</span>
        </div>
        <div className='mt-3'>
          <table className="table" border={1}>
            <thead>
              <tr className='text-white' style={{ fontSize: '25px' }}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
              <tr>
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
