import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";

function Footer() {
  return (
    <>
      <MDBFooter
        className="text-center"
        color="black"
        bgColor="none"
        style={{ backgroundColor: "#d0e4ff", marginTop: 40 }}
      >
        <MDBContainer className="p-4">
          <section className="">
            <MDBRow>
              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-black">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-black">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-black">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-black">
                      Link 4
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-black">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-black">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-black">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-black">
                      Link 4
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-black">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-black">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-black">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-black">
                      Link 4
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-black">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-black">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-black">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-black">
                      Link 4
                    </a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </section>

          <section className="mb-4" style={{ marginTop: 30, marginBottom: 30 }}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              distinctio earum repellat quaerat voluptatibus placeat nam,
              commodi optio pariatur est quia magnam eum harum corrupti dicta,
              aliquam sequi voluptate quas.
            </p>
          </section>

          <section className="">
            <form action="">
              <MDBRow className="d-flex justify-content-center">
                <MDBCol size="auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </MDBCol>

                <MDBCol md="5" start>
                  <MDBInput
                    color="#d0e4ff"
                    bgColor="#d0e4ff"
                    type="email"
                    label="Email address"
                    className="mb-4"
                  />
                </MDBCol>

                <MDBCol size="auto">
                  <MDBBtn outline color="dark" type="submit" className="mb-4">
                    Subscribe
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </form>
          </section>

          <section className="mb-4">
            <MDBBtn
              outline
              color="dark"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn>

            <MDBBtn
              outline
              color="dark"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="twitter" />
            </MDBBtn>

            <MDBBtn
              outline
              color="dark"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="google" />
            </MDBBtn>

            <MDBBtn
              outline
              color="dark"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="instagram" />
            </MDBBtn>

            <MDBBtn
              outline
              color="dark"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="linkedin-in" />
            </MDBBtn>

            <MDBBtn
              outline
              color="dark"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="github" />
            </MDBBtn>
          </section>
        </MDBContainer>

        <div className="text-center p-3" style={{ backgroundColor: "#d0e4ff" }}>
          © 2024 Copyright:{" "}
          <a className="text-black" href="https://findool.com/">
            Findool.com
          </a>
        </div>
      </MDBFooter>
    </>
  );
}

export default Footer;
