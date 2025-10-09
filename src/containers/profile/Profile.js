import React, { useState, useEffect, lazy, Suspense } from "react";
import { openSource } from "../../portfolio";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading";
import "./Profile.scss";

const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);
export default function Profile() {
  const [prof, setrepo] = useState([]);
  function setProfileFunction(array) {
    setrepo(array);
  }

  useEffect(() => {
    if (openSource.showGithubProfile === "true") {
      const getProfileData = () => {
        fetch("/profile.json")
          .then(result => {
            if (result.ok) {
              return result.json();
            }
          })
          .then(response => {
            setProfileFunction(response.data.user);
          })
          .catch(function (error) {
            console.error(
              `${error} (because of this error GitHub contact section could not be displayed. Contact section has reverted to default)`
            );
            setProfileFunction("Error");
            openSource.showGithubProfile = "false";
          });
      };
      getProfileData();
    }
  }, []);
  if (
    openSource.display &&
    openSource.showGithubProfile === "true" &&
    !(typeof prof === "string" || prof instanceof String)
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <GithubProfileCard prof={prof} key={prof.id} />
      </Suspense>
    );
  } else {
    return (
      <section id="profile" className="profile-container">
        <div className="profile-wrapper">
          {/* Left: Image */}
          <div className="profile-image-section" data-aos="fade-right">
            <img
              src={require("../../assets/images/dhinesh.jpg")}
              alt="Dhineshkumar"
              className="profile-image"
            />
          </div>

          {/* Right: Text */}
          <div className="profile-text-section" data-aos="fade-left">
            <h2 className="profile-name">Dhineshkumar</h2>
            <p className="profile-bio">
              I am a passionate <strong>Full Stack Developer</strong> with
              experience in building web and mobile applications using
              <strong> JavaScript</strong>, <strong>React</strong>,{" "}
              <strong>Node.js</strong>, and <strong>Python</strong>. I love
              learning new technologies and solving real-world problems.
            </p>
          </div>
        </div>
      </section>
    );
  }
}
