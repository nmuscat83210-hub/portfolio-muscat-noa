import Home from './pages/Home';
import Passions from './pages/Passions';
import Parcours from './pages/Parcours';
import Competences from './pages/Competences';
import Projets from './pages/Projets';
import ProjectDetail from './pages/ProjectDetail';
import Futur from './pages/Futur';
import Contact from './pages/Contact';
import ExperiencePro from './pages/ExperiencePro';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "Passions": Passions,
    "Parcours": Parcours,
    "Competences": Competences,
    "Projets": Projets,
    "ProjectDetail": ProjectDetail,
    "Futur": Futur,
    "Contact": Contact,
    "ExperiencePro": ExperiencePro,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};