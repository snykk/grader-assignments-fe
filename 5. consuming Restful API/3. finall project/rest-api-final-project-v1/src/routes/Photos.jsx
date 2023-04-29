import { useEffect } from "react";
import { useState } from "react";
import Card from "../components/Card";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [sort, setSort] = useState("asc");
  const [submited, setSubmited] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deletePhoto = (id) => {
    fetch(`http://localhost:3001/photos/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      setPhotos(prevPhotos => prevPhotos.filter(photo => photo.id !== id));
    })
    .catch(error => {
      console.log(error);
    });
  };
  

  useEffect(() => {
    setLoading(true);
    let url = 'http://localhost:3001/photos';
    if (sort) {
      url += `?_sort=id&_order=${sort}`;
    }
    if (submited) {
      url += `&q=${submited}`;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setLoading(false);
        setPhotos(data);
      })
      .catch(error => {
        setLoading(false);
        setError(error);
      });
  }, [sort, submited]);
  

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3001/photos`)
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data);
      })
      .catch((error) => {
        setError(error);
      });
    setLoading(false);
  }, []);

  if (error) return <h1 style={{ width: "100%", textAlign: "center", marginTop: "20px" }} >Error!</h1>;

  return (
    <>
      <div className="container">
        <div className="options">
          <select
            onChange={(e) => setSort(e.target.value)}
            data-testid="sort"
            className="form-select"
            style={{}}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmited(search);
            }}
          >
            <input
              type="text"
              data-testid="search"
              onChange={(e) => setSearch(e.target.value)}
              className="form-input"
            />
            <input
              type="submit"
              value="Search"
              data-testid="submit"
              className="form-btn"
            />
          </form>
        </div>
        <div className="content">
          {loading ? (
            <h1
              style={{ width: "100%", textAlign: "center", marginTop: "20px" }}
            >
              Loading...
            </h1>
          ) : (
            photos.map((photo) => {
              return (
                <Card key={photo.id} photo={photo} deletePhoto={deletePhoto} />
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Photos;
