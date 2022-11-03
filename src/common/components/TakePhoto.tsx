import React, { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import Navbar from "../../pages/Landing/components/Navbar";
import { Button, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import './assets/card.css';

const videoConstraints = {
    width: 720,
    height: 360,
    facingMode: "user"
};

export const TakePhoto = () => {
    const [isCaptureEnable, setCaptureEnable] = useState<boolean>(false);
    const [photo, setPhoto] = useState<boolean | null>(true);
    const webcamRef = useRef<Webcam>(null);
    const [url, setUrl] = useState<string | null>(null);
    const navigate = useNavigate();
    const capture = useCallback(() => {
        const imageSrc = webcamRef.current?.getScreenshot();
        if (imageSrc) {
            setUrl(imageSrc);
            setPhoto(false)
        }
    }, [webcamRef]);

    return (
        <>
            <Navbar />
            <Center>
                <header>
                    <h1 className="txt">Présence par reconnaissance faciale</h1>
                </header>
            </Center>

            <Center>

                <div className="photo">
                    {isCaptureEnable || (

                        <Button onClick={() => setCaptureEnable(true)} colorScheme={"red"} w={"max-content"} h={"12"} rounded={"2xl"} display={"flex"} flexWrap={"wrap"}>Vérifié ma présence</Button>

                    )}
                    {isCaptureEnable && (
                        <>

                            <div>
                                {
                                    photo === true ?
                                        (
                                            <Webcam
                                                audio={false}
                                                width={540}
                                                height={360}
                                                ref={webcamRef}
                                                screenshotFormat="image/jpeg"
                                                videoConstraints={videoConstraints}
                                            />
                                        ) : null

                                }

                            </div>
                            {
                                photo === true ? (<div>
                                    <button className="capture" onClick={capture}>Capturer votre profil</button>

                                </div>) : null
                            }

                        </>
                    )}
                </div>
            </Center>
            {url && (
                <>
                    <Center>
                        <div>
                            <div>
                                <img src={url} alt="Screenshot" />
                            </div>
                            <Button
                                className="btn"
                                onClick={() => {
                                    setUrl(null);
                                    setPhoto(true)
                                }}
                            >
                                Reprendre votre photo
                            </Button>
                            <Button
                                className="btn"
                                onClick={() => {
                                    setUrl(null);
                                    setPhoto(true)
                                }}
                            >
                                Etudiant(e) suivant(e)
                            </Button>
                            <Button
                                className="btn"
                                onClick={() => navigate('/landing')}
                            >Terminer
                            </Button>
                        </div>

                    </Center>


                </>
            )}
        </>
    );
};
