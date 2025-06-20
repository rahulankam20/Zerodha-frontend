function Hero() {
  return (
    <div className="bg-primary text-white">
    <div className="container p-5">
      <div className="d-flex justify-content-between px-4 ">
        <h5>Support Portal</h5>
        <a
          className="text-white"
          style={{ textUnderlineOffset: "6px" }}
          href="#"
        >
          Track tickets
        </a>
      </div>
      <div className="row p-4">
        <div className="col-6">
          <h4>Search for an answer or browse help topics to create a ticket</h4>
          <form class="d-flex mt-5" role="search">
            <input
              className="form-control me-2 p-3"
              type="search"
              placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
              aria-label="Search"
            />
            <button className="btn bg-white p-3 px-4" type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
          <br />
          <a
            className="text-white p-3 "
            style={{ textUnderlineOffset: "6px" }}
            href="#"
          >
            Track account opening{" "}
          </a>
          <a
            className="text-white p-3 "
            style={{ textUnderlineOffset: "6px" }}
            href=""
          >
            {" "}
            Track segment activation
          </a>
          <a
            className="text-white p-3 "
            style={{ textUnderlineOffset: "6px" }}
            href=""
          >
            Intraday margins
          </a>{" "}
          <br /> <br />
          <a
            className="text-white p-3 "
            style={{ textUnderlineOffset: "6px" }}
            href=""
          >
            Kite user manual
          </a>
        </div>
        <div className="col-6 p-5">
          <h5>Featured</h5>
          <ol className=' px-5'>
            <li className="my-3">
              <a className="text-white" href="#">
                Revision in expiry day of Index and Stock derivatives contracts
              </a>
            </li>
            <li>
              <a className="text-white" href="#">
                Surveillance measure on scrips - June 2025
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Hero;
