import React, { Fragment,useState } from "react";

import {Link} from 'react-router-dom'
import { IoChevronBackCircle } from 'react-icons/io5';
// redux
import { postArticle } from '../slices/articleSlice';

import { useDispatch, useSelector } from 'react-redux';

const PostArticle =() => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const { auth, article } = useSelector(state => state);
    const dispatch = useDispatch();

    const postArticleSubmit = () =>{
        setIsSubmitted(true);
        if (title !== '' && description !== '') {
            dispatch(postArticle({ 
                title, description
              }));
          }
    }

    return(
        <Fragment>
            <div className=" w-full p-6">
				<Link to="/profil">
                    <div className='bg-transparent absolute z-10'>
                        <IoChevronBackCircle className='m-7 cursor-pointer' size={30} color={'#E2D4F0'} />
                    </div>
                </Link>
                <div className="container mx-auto max-w-3xl pt-0 pb-20 md:py-7 relative">
                    <div className="text-center text-3xl font-semibold">
                        <h1>Update article</h1>
                    </div>
					</div>
					<div className="mb-4 block">
						<label className="block">
							<span className="block mb-1 text-sm font-medium text-slate-700">Title</span>

							<input
								// value={product.productBySeller.productId}
								// value={title}
								name="title"
								onChange={(e) => setTitle( e.target.value)}
								type="text" placeholder="Title"
								className=" w-full rounded-xl px-4 py-2 bg-gray-200"
							/>
							{title === '' && isSubmitted ? <span className='text-red-600 mt-1'>*Silahkan isi nama product</span> : ''}
						</label>
					</div>
					<div className="mb-4 block">
						<label className="block">
							<span className="block mb-1 text-sm font-medium text-slate-700">Deskripsi</span>
							<input
								// value={description}
								name="description"
								onChange={(e) => setDescription(e.target.value )}
								type="text" placeholder="Deskripsi"
								className=" w-full rounded-xl px-4 py-2 bg-gray-200"
							/>
							{description === '' && isSubmitted ? <span className='text-red-600 mt-1'>*Silahkan isi harga</span> : ''}
						</label>
					</div>
					<div className=" mb-4 ">
						<button type="submit" 
                        onClick={() => postArticleSubmit()}
							className="px-4 w-full py-2 mr-4 border-2 hover:bg-[#7126B5CC] border-primary bg-primary text-white font-semibold rounded-xl">
							Simpan
						</button>
					</div>
				</div >

        </Fragment>
    )
}
export default PostArticle;