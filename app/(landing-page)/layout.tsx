import { Footer } from "@/components/footer";
import { LandingPageHeader } from "@/components/landing-page-header";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingPageHeader
        items={[
          { title: "Accueil", href: "/" },
          { title: "Fonctionnalités", href: "/#features" },
          { title: "Nos offres", href: "/#pricing" },
        ]}
      />
      <main className="flex-1">{props.children}</main>
      <Footer
        builtBy="talk²"
        builtByLink="https://www.talk2.org/"
        githubLink="https://github.com/stack-auth/stack-template"
        twitterLink="https://twitter.com/stack_auth"
        linkedinLink="linkedin.com/company/stack-auth"
      />
    </div>
  );
}
