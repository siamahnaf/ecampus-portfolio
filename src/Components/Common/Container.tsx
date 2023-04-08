//Interface
interface Props {
    children: React.ReactNode,
    className?: string
}
const Container = ({ children, className }: Props) => {
    return (
        <div className={`xxl:container xxl:mx-auto px-16 ${className}`}>
            {children}
        </div>
    );
};
export default Container;