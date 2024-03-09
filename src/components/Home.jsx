import styled from "styled-components";
import homeBackground from "../assets/images/home-background.png";
import ImageSlider from "./ImageSlider";
import Viewers from "./Viewers";
import Recommended from "./Recommended";
import NewDisney from "./NewDisney";
import Trending from "./Trending";
import Originals from "./Originals";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import db from "../firebase";
import {selectUserName} from "../features/user/userSlice";
import {setMovies} from "../features/movie/movieSlice";
import {collection, onSnapshot} from "firebase/firestore";

function Home(props) {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);

    useEffect(() => {
        let recommends = [];
        let newDisneys = [];
        let originals = [];
        let trending = [];

        const moviesCollectionRef = collection(db, "movies");
        const unsubscribe = onSnapshot(moviesCollectionRef, (snapshot) => {
            snapshot.docs.forEach((doc) => {
                switch (doc.data().type) {
                    case "recommend":
                        recommends.push({id: doc.id, ...doc.data()});
                        break;
                    case "new":
                        newDisneys.push({id: doc.id, ...doc.data()});
                        break;
                    case "original":
                        originals.push({id: doc.id, ...doc.data()});
                        break;
                    case "trending":
                        trending.push({id: doc.id, ...doc.data()});
                        break;
                    default:
                        break;
                }
            });

            dispatch(
                setMovies({
                    recommend: recommends,
                    newDisney: newDisneys,
                    original: originals,
                    trending: trending,
                }),
            );
        });

        return () => unsubscribe();
    }, [userName, dispatch]);

    return (
        <Container>
            <ImageSlider/>
            <Viewers/>
            <Recommended/>
            <NewDisney/>
            <Trending/>
            <Originals/>
        </Container>
    );
}

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);

    &:after {
        background: url(${homeBackground}) center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
`;

export default Home;
