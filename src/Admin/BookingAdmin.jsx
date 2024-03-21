import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../components/Footer'
import AdminHeader from './AdminHeader'

function BookingAdmin() {
    return (
        <>
            <AdminHeader></AdminHeader>
            <div className='d-flex justify-content-center align-items-center mt-5 flex-column'>
                <h3>Booking Request</h3>
                <Container>
                    <table className='table border mt-4'>
                        <thead className='p-2'>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Ph No</th>
                                <th>Address</th>
                                <th>Treatment type</th>
                                <th>From</th>
                                <th>To</th>
                                {/* <th className='text-center'>Action</th> */}
                            </tr>
                        </thead>
                        <tbody className='p-2'>
                            <tr>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                {/* <div className='d-flex justify-content-center align-items-center'>
                                    <td><button className='btn btn-success'>Accept</button></td>
                                    <td><button className='btn btn-danger ms-3'>Reject</button></td>
                                </div> */}
                            </tr>
                        </tbody>
                    </table>
                </Container>
            </div>
            <Footer></Footer>

        </>
    )
}

export default BookingAdmin