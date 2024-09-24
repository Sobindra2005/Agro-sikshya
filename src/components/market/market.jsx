import React from 'react'
import Table from './table'
export default function Market() {
  return (
    <>
    <div className='mt-10 '>
        <h2 className='font-bold text-xl text-fifth pl-5'>Market Trend</h2>
        <div className='m-2 space-x-2 p-2 sm:ml-52'>
            <label htmlFor="location">Location</label>
            <select name="location" id="location">
                <option value="kathmandu">Kathmandu</option>
                <option value="kathmandu">Bhaktapur</option>
                <option value="kathmandu">Lalitpur</option>
                <option value="kathmandu">Banepa</option>
                <option value="kathmandu">Biratnagar</option>
                <option value="kathmandu">Ilam</option>
                <option value="kathmandu">Jhapa</option>
                <option value="kathmandu">Itahari</option>
            </select>
        </div>
        <Table/>
    </div>
    </>
  )
}
