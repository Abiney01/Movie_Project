import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import {
  useGetSpecificMovieQuery,
  useUpdateMovieMutation,
  useUploadImageMutation,
  useDeleteMovieMutation,
} from "../../redux/api/movie";

import { toast } from "react-toastify";

const UpdateMovie = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const [movieData, setMovieData] = useState({
    name: "",
    year: 0,
    detail: "",
    cast: [],
    ratings: 0,
    image: null,
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const { data: initialMovieData } = useGetSpecificMovieQuery(id);

  useEffect(() => {
    if (initialMovieData) {
      setMovieData(initialMovieData);
    }
  }, [initialMovieData]);

  const [updateMovie, { isLoading: isUpdatingMovie }] =
    useUpdateMovieMutation();
  const [
    uploadImage,
    { isLoading: isUploadingImage, error: uploadImageErrorDetails },
  ] = useUploadImageMutation();

  const [deleteMovie] = useDeleteMovieMutation();

  return (
    <div className="conatiner flex justify-center items-center mt-4">
      <form>
        <p className="text-green-200 w-[50rem] text-2xl mb-4">Update Movie</p>
        <div className="mb-4">
          <label className="block">
            Name:
            <input
              type="text"
              name="name"
              value={movieData.name}
            //   onChange={handleChange}
              className="border px-2 py-1 w-full"
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default UpdateMovie;
