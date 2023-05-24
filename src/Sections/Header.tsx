//Components
import Logo from "@/Components/Header/Logo";
import Navigation from "@/Components/Header/Navigation";
import MobileNavigation from "@/Components/Header/MobileNavigation";

//Container
import Container from "@/Components/Common/Container";

const Header = () => {
    return (
        <header id="header">
            <Container className="flex gap-2 items-center fixed top-0 left-0 right-0 z-50 h-[65px] xxl:h-[90px] xl:h-[80px] md:h-[65px] smd:h-[58px] lsm:h-[55px] msm:h-[54px] sm:h-[53px] xxs:h-[52px] bg-white">
                <Logo />
                <Navigation />
                <MobileNavigation />
            </Container>
        </header>
    );
};

export default Header;