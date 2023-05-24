//Interface
interface Props {
    children: React.ReactNode,
    className?: string
}
const Container = ({ children, className }: Props) => {
    return (
        <div className={`xxl:container xxl:mx-auto px-16 md:px-16 sm:px-8 xxs:px-5 ${className}`}>
            {children}
        </div>
    );
};
export default Container;