import { PostRequestDom } from "@domain/post";
import { UserDom } from "@domain/users"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form"
import * as Yup from 'yup';

interface PostFormProps {
    users: UserDom[],
    onClick: (_:PostRequestDom) => void;

}





const PostFormYup =({users=[],onClick}:Readonly<PostFormProps>)=> {

    const validationSchema = Yup.object().shape({
        userid: Yup.string().required('user is required'),
        title: Yup.string()
          .required('title is required')
          .min(6, 'title must be at least 6 characters')
          .max(20, 'title must not exceed 20 characters'),
        body: Yup.string()
          .required('body is required')
          .min(6, 'body must be at least 6 characters')
          .max(20, 'body must not exceed 20 characters'),
    /*    email: Yup.string()
          .required('Email is required')
          .email('Email is invalid'),
         password: Yup.string()
          .required('Password is required')
          .min(6, 'Password must be at least 6 characters')
          .max(40, 'Password must not exceed 40 characters'),
        confirmPassword: Yup.string()
          .required('Confirm Password is required')
          .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'), */
       // acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')
      });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostRequestDom>({
    resolver: yupResolver(validationSchema)
  });
  const onSubmit = (data:PostRequestDom) => onClick(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-control w-full max-w-xs mx-auto text-white">
      <div className="grid grid-cols-1 gap-4">
        {/* Usuario */}
        <div>
          <label htmlFor="userid" className="label text-black">Usuario</label>
          <select id="userid" {...register("userid", { required: true })} className="select select-bordered w-full">
            {users.map(user => (
              <option key={user.id} value={user.id ?? ""}>{user.name}</option>
            ))}
          </select>
          <div className="invalid-feedback  text-black">{errors.userid?.message}</div>
        </div>
  
        {/* Titulo */}
        <div>
          <label htmlFor="title" className="label text-black">Título</label>
          <input className="input input-bordered w-full"
            id="title"
            aria-invalid={errors.title ? "true" : "false"}
            {...register("title", { required: true })}
          />
           <div className="invalid-feedback text-black">{errors.title?.message}</div>
        </div>
  
        {/* Body */}
        <div>
          <label htmlFor="body" className="label text-black">Body</label>
          <input className="input input-bordered w-full"
            id="body"
            aria-invalid={errors.body ? "true" : "false"}
            {...register("body", { required: true })}
          />
           <div className="invalid-feedback  text-black">{errors.body?.message}</div>
        </div>
  
        {/* Botón de envío */}
        <div>
          <input type="submit" className="btn btn-success w-full" />
        </div>
      </div>
    </form>
  );
  
}

export default PostFormYup