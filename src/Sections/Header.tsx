//Components
import Logo from "@/Components/Header/Logo";
import Navigation from "@/Components/Header/Navigation";

//Container
import Container from "@/Components/Common/Container";

const Header = () => {
    return (
        <header id="header">
            <Container className="flex gap-2 items-center fixed top-0 left-0 right-0 z-50 bg-white py-1">
                <Logo />
                <Navigation />
            </Container>
        </header>
    );
};

export default Header;