import { format } from 'date-fns';
import id from 'date-fns/esm/locale/id/index.js';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppoinments = ({ date }) => {
    // const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)

    const formatedDate = format(date, 'PP')

    const { data: services, isLoading, refetch } = useQuery(['available', formatedDate], () => fetch(`http://localhost:5000/available?date=${formatedDate}`)
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }

    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formatedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [formatedDate])
    return (
        <div>
            <h4 className='text-xl text-secondary text-center mb-5'> Available Appoinments on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    >
                    </Service>)
                }
            </div>
            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                refetch={refetch}
                // jokhn submit e click krbe tkhn data gula show kore auto modal close hye jabe
                setTreatment={setTreatment}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppoinments;