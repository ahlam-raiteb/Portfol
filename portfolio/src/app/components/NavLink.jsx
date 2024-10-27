import Link from "next/link";

const NavLink =({ href, title}) => {
    return (
        <Link
        href={href}
        class="block py-2 pl-3  pr-4 text-black rounded md:p-0"
        >
            {title}
        </Link>
    );
};
export default NavLink;