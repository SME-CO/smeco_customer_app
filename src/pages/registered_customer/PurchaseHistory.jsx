import React from 'react'
import Navbarr from '../../components/Navbarr';
import SideNavr from "../../components/SideNavr";

const PurchaseHistory = () => {
    return (
        <div>
            <Navbarr />
            
                        <div class="pb-24 md:ml-60 w-screen'>">
                            <p className='pl-24 text-3xl font-bold py-8'>Your Purchase History</p>

                        <div class="overflow-x-auto border-x border-t pl-24 pr-12">
                        <table class="table-auto w-full">
                            <thead class="border-b">
                                <tr class="bg-gray-100">
                                    <th class="text-left p-4 font-bold">
                                    DATE
                                    </th>
                                    <th class="text-left p-4 font-bold">
                                    PRODUCT
                                    </th>
                                    <th class="text-left p-4 font-bold">
                                    AMOUNT(RS)
                                    </th>
                                    <th class="text-left p-4 font-bold">
                                    TOTAL(RS)
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b hover:bg-gray-50">
                                    <td class="p-4">
                                    07/07/2022
                                    </td>
                                    <td class="p-4">
                                    T-shirt <br/>
                                    Shirt <br/>
                                    Shirt <br/>
                                    </td>
                                    <td class="p-4">
                                    3000 <br/>
                                    5000 <br/>
                                    2000 <br/>
                                    </td>
                                    <td class="p-4 pt-3">
                                    10,000
                                    </td>
                                </tr>
                                <tr class="border-b hover:bg-gray-50">
                                    <td class="p-4">
                                    10/10/2022
                                    </td>
                                    <td class="p-4">
                                    T-shirt <br/>
                                    Frock <br/>
                                    Shirt <br/>
                                    </td>
                                    <td class="p-4">
                                    6000 <br/>
                                    5000 <br/>
                                    2000 <br/>
                                    </td>
                                    <td class="p-4 pt-3">
                                    13,000
                                    </td>
                                </tr>
                                <tr class="border-b hover:bg-gray-50">
                                    <td class="p-4">
                                    09/09/2022
                                    </td>
                                    <td class="p-4">
                                    Shawl <br/>
                                    Shirt <br/>
                                    Skirt <br/>
                                    </td>
                                    <td class="p-4">
                                    3000 <br/>
                                    16000 <br/>
                                    2000 <br/>
                                    </td>
                                    <td class="p-4 pt-3">
                                    21,000
                                    </td>
                                </tr>
                                <tr class="border-b hover:bg-gray-50">
                                    <td class="p-4">
                                    12/12/2022
                                    </td>
                                    <td class="p-4">
                                    Bottom <br/>
                                    Shirt <br/>
                                    Skirt <br/>
                                    </td>
                                    <td class="p-4">
                                    4000 <br/>
                                    16000 <br/>
                                    2000 <br/>
                                    </td>
                                    <td class="p-4 pt-3">
                                    22,000
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                        </div>

            <SideNavr />
        </div>
    )
}

export default PurchaseHistory
