import Authenticated from '../Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import { IAuth } from '../../Interfaces/Route';

interface IProps {
    auth: IAuth
}

export default function Dashboard(props : IProps) {
    return (
        <Authenticated
            auth={props.auth}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <>
            <Head title="Dashboard" />
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 bg-white border-b border-gray-200">Você está logado!</div>
                        </div>
                    </div>
                </div>
            </>
        </Authenticated>
    );
}
