import React, { Fragment,useState, useEffect } from "react";

import {Link} from 'react-router-dom'
import { IoChevronBackCircle } from 'react-icons/io5';

// redux
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getUsers, getProvinsi, getCity, getDistrik } from '../../slices/authSlice';

import { updateUsers } from "../../slices/authSlice";
const  UpdateProfil = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isSubmitted, setIsSubmitted] = useState(false);
    const { auth } = useSelector(state => state);

//  ==== REGIONS ==== \\

let province = auth.user.countryId ? auth.user.countryId : ''
let city = auth.user.cityId ? auth.user.cityId : ''
let district = auth.user.districtId ? auth.user.districtId : ''
	// console.log("profince",province)
	useEffect(() =>{
		dispatch(getProvinsi({
			id: province
		}))
	},[dispatch,province])

	useEffect(() =>{
		dispatch(getProvinsi({
			id: district
		}))
	},[dispatch,district])

// 

	const allProvinces = auth.province.map((region) => region.id);
	// const allCity = auth.city.map((region) => region.id);
	// const allDistrict = auth.district.map((region) => region.id);
	console.log("prov",allProvinces)
	// console.log("cit",allCity)
	// console.log("dis",allDistrict)

	const [selectedRegion, setSelectedRegion] = useState(allProvinces)
	const [selectedCity, setSelectedCity] = useState(selectedRegion)
	const [selectedDistrict, setSelectedDistrict] = useState(selectedCity)

	
// ==== END ==== \\\
    const initialProfileState = {
        name:auth.user.name ? auth.user.name : "",
        countryId: auth.user.countryId ? auth.user.countryId : "",
        address: auth.user.address ? auth.user.address : ""
    };
    const [currentProfil, setCurrentProfil] = useState(initialProfileState);

    const updateProfil = () => {
        setIsSubmitted(true);
        if (currentProfil.name !== '' && currentProfil.countryId !== '' && selectedCity !== '' && selectedDistrict !== '' && currentProfil.address !== '' && selectedRegion !== '' ) {
          dispatch(updateUsers({ 
            token:auth.login.token,
            name:currentProfil.name,
            countryId: parseInt(currentProfil.countryId),
            provinceId: parseInt(selectedRegion) ,
            cityId: parseInt(selectedCity) ,
            districtId: parseInt(selectedDistrict),
            address:currentProfil.address
        }))
            .unwrap()
            .then(()=>{
                    dispatch(getUsers());
                    navigate('/profil');
                }) 
        }
      };

    return(
        <Fragment>
            <div className="relative">
                <Link to="/profil">
                    <div className='bg-transparent absolute z-10'>
                        <IoChevronBackCircle className='m-7 cursor-pointer' size={30} color={'#E2D4F0'} />
                    </div>
                </Link>
                <div className="container mx-auto max-w-3xl pt-0 pb-20 md:py-7 relative">
                    <div className="text-center text-3xl font-semibold">
                        <h1>Update Profil</h1>
                    </div>
                
            <div className="flex container  mx-auto max-w-3xl pt-3" >
				
				<div className="w-full p-6 " >

					<div className="mb-4 pt-5">
						<label className="block">
							<span className="block mb-1 text-sm font-medium text-slate-700">
								Nama*
							</span>
							<input
								value={currentProfil.name}
                                // onChange={(e) => setName( e.target.value)}
								onChange={(e) => setCurrentProfil({ ...currentProfil, name: e.target.value })}
								type="text"
								placeholder="Nama"
								className=" w-full rounded-xl  px-4 py-2 bg-gray-200"
							/>

							{currentProfil.name === '' && isSubmitted ? <span className='text-red-600 mt-1'>*Silahkan isi namamu</span> : ''}
						</label>
					</div>

					<div className="mb-4">
						<label className="relative">
							<span className="block mb-1 text-sm font-medium text-slate-700">Country*</span>
							<select
								onChange={(e) => setCurrentProfil({ ...currentProfil, countryId: e.target.value })}
								required
                                // onChange={(e) => setCountryId(e.target.value)}
								value={currentProfil.countryId}
								name="country"
								className="
                                    w-full           
                                    block
                                    mt-1
                                    rounded-xl
                                    bg-gray-200    
                                    px-4 py-2             
                                    shadow-sm
                                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                    "  >

								<option className="" value='' disabled selected >
									Pilih countryId
								</option>
                                <option value={1}>Indonesia</option>

							</select>

						</label>
						{currentProfil.countryId === '' && isSubmitted ? <span className='text-red-600 mt-1'>*Silahkan Isi Kotamu</span> : ''}
					</div>
                    
            <div className="mb-4">
						<label className="relative">
							<span className="block mb-1 text-sm font-medium text-slate-700">Provinsi*</span>
							<select
								// onChange={(e) => setCurrentProfil({ ...currentProfil, provinceId: e.target.value })}
								required
                                onChange={(e) => 
									setSelectedRegion(e.target.value)}
								// value={selectedRegion.id}
								name="provinsi"
								onClick={() => dispatch(getCity({id:parseInt(selectedRegion) } ))}
								className="
                                    w-full           
                                    block
                                    mt-1
                                    bg-gray-200
                                    rounded-xl  
                                    px-4 py-2               
                                    shadow-sm
                                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                    "  >

								<option className="" value='' disabled selected >
									Pilih Provinsi
								</option>

								{auth.province.map((provinsi) => (
									<option key={provinsi.id} value={provinsi.id}>
										{provinsi.name}
									</option>
								))}

							</select>

						</label>
						{selectedRegion === '' && isSubmitted ? <span className='text-red-600 mt-1'>*Silahkan Isi Provinsimu</span> : ''}
					</div>
                    <div className="mb-4">
						<label className="relative">
							<span className="block mb-1 text-sm font-medium text-slate-700">City*</span>
							<select
								// onChange={(e) => setCurrentProfil({ ...currentProfil, city: e.target.value })}
								
								onChange={(e) => setSelectedCity(e.target.value)}
								name="kota"
								onClick={() => dispatch(getDistrik({id:parseInt(selectedCity)} ))}
								className="
                                    w-full           
                                    block
                                    mt-1
                                    bg-gray-200
                                    rounded-xl                 
                                    shadow-sm
                                    px-4 py-2
                                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                    "  >

								<option className="" value='' disabled selected >
									Pilih Kota
								</option>

								{auth.city.map((kota) => (
									<option key={kota.id} value={kota.id}>
										{kota.name}
									</option>
								))}

							</select>

						</label>
						{selectedCity === '' && isSubmitted ? <span className='text-red-600 mt-1'>*Silahkan Isi Kotamu</span> : ''}
					</div>

            <div className="mb-4">
						<label className="relative">
							<span className="block mb-1 text-sm font-medium text-slate-700">Kecamatan*</span>
							<select
								// onChange={(e) => setCurrentProfil({ ...currentProfil, districtId: e.target.value })}
                                onChange={(e) => setSelectedDistrict(e.target.value)}
								// value={currentProfil.districtId}
								name="kecamatan"
								className="
                                    w-full           
                                    block
                                    mt-1
                                    bg-gray-200
                                    rounded-xl                 
                                    shadow-sm
                                    px-4 py-2
                                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                    "  >

								<option className="" value='' disabled selected >
									Pilih Kecamatan
								</option>
								{auth.district.map((kecamatan) => (
									<option key={kecamatan.id} value={kecamatan.id}>
										{kecamatan.name}
									</option>
								))}

							</select>

						</label>
						{selectedDistrict === '' && isSubmitted ? <span className='text-red-600 mt-1'>*Silahkan Isi Distikmu</span> : ''}
					</div>
					<div className="mb-4 block">
						<label className="block">
							<span className="block mb-1 text-sm font-medium text-slate-700">Alamat*</span>
							<input
                                //  onChange={(e) => setAddress(e.target.value)}
								onChange={(e) => setCurrentProfil({ ...currentProfil, address: e.target.value })}
								value={currentProfil.address}
								type='textArea' placeholder=""
								className=" w-full rounded-xl bg-gray-200 px-4 py-2"
							/>
						</label>
						{currentProfil.address === '' && isSubmitted ? <span className='text-red-600 mt-1'>*Silahkan Isi No Handphone mu</span> : ''}

					</div>
					<div className=" mb-4 ">
						<button type="submit" 
                        onClick={() => updateProfil()}
							className="px-4 w-full py-2 mr-4 border-2 hover:bg-lime-400 border-primary bg-primary text-white font-semibold rounded-xl">
							Simpan
						</button>
					</div>
				</div>
			</div>
                </div>
            </div>

        </Fragment>
    )
}
export default UpdateProfil;