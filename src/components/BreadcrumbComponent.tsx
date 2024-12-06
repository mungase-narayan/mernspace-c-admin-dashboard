import React from "react";
import { useLocation, Link } from "react-router-dom";
import { BreadcrumbPage, BreadcrumbSeparator } from "./ui/breadcrumb";

// Define Breadcrumb Components

type BreadcrumbProps = {
  children: React.ReactNode;
  className?: string;
};

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  children,
  className,
}) => (
  <nav className={className} aria-label="breadcrumb">
    {children}
  </nav>
);

export const BreadcrumbList: React.FC<BreadcrumbProps> = ({
  children,
  className,
}) => <ol className={`flex ${className}`}>{children}</ol>;

export const BreadcrumbItem: React.FC<BreadcrumbProps> = ({
  children,
  className,
}) => <li className={`inline-flex ${className}`}>{children}</li>;

// export const BreadcrumbSeparator: React.FC<BreadcrumbProps> = ({
type BreadcrumbLinkProps = {
  as?: React.ElementType; // Allows passing a custom component like `Link`
  to?: string; // For `react-router-dom` links
  className?: string;
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const BreadcrumbLink: React.FC<BreadcrumbLinkProps> = ({
  as: Component = "a", // Default to <a> tag if `as` is not provided
  to,
  className,
  children,
  ...props
}) => {
  // Dynamically render the specified component
  return (
    <Component to={to} className={className} {...props}>
      {children}
    </Component>
  );
};

// BreadcrumbComponent Implementation
const BreadcrumbComponent: React.FC = () => {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter((x) => x);

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage className="flex items-center">
              {pathnames.map((name, index) => {
                const path = `/${pathnames.slice(0, index + 1).join("/")}`;
                return (
                  <BreadcrumbItem
                    key={path}
                    className="flex gap-2 items-center"
                  >
                    {index > 0 && (
                      <BreadcrumbSeparator
                        className="ml-2"
                        children={undefined}
                      />
                    )}
                    <BreadcrumbLink as={Link} to={path}>
                      {name}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                );
              })}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbComponent;
