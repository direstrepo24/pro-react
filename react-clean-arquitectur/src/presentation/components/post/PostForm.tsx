import { PostRequestDom } from "@domain/post";
import { UserDom } from "@domain/users"
import { useForm } from "react-hook-form"

interface PostFormProps {
    users: UserDom[],
    onClick: (_:PostRequestDom) => void;

}



const PostForm =({users=[],onClick}:Readonly<PostFormProps>)=> {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostRequestDom>()
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
        </div>
  
        {/* Titulo */}
        <div>
          <label htmlFor="title" className="label text-black">Título</label>
          <input className="input input-bordered w-full"
            id="title"
            aria-invalid={errors.title ? "true" : "false"}
            {...register("title", { required: true })}
          />
          {errors.title && errors.title.type === "required" && (
            <span role="alert">This is required</span>
          )}
        </div>
  
        {/* Body */}
        <div>
          <label htmlFor="body" className="label text-black">Body</label>
          <input className="input input-bordered w-full"
            id="body"
            aria-invalid={errors.body ? "true" : "false"}
            {...register("body", { required: true })}
          />
          {errors.body && errors.body.type === "required" && (
            <span role="alert">This is required</span>
          )}
        </div>
  
        {/* Botón de envío */}
        <div>
          <input type="submit" className="btn btn-success w-full" />
        </div>
      </div>
    </form>
  );
  
}

export default PostForm