import { FeatureGrid } from "@/components/features";
import { Hero } from "@/components/hero";
import { PricingGrid } from "@/components/pricing";
import { stackServerApp } from "@/stack";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ComponentIcon, Users } from "lucide-react";
import { TbCoffee } from "react-icons/tb";
import { Infinity, SearchCheck, MessageCircleMore, LineChart, GraduationCap, FilePenLine } from 'lucide-react';


export default async function IndexPage() {
  const project = await stackServerApp.getProject();
  if (!project.config.clientTeamCreationEnabled) {
    return (
      <div className="w-full min-h-96 flex items-center justify-center">
        <div className="max-w-xl gap-4">
          <p className="font-bold text-xl">Configuration requise</p>
          <p className="">
            {
              "Pour commencer à utiliser ce projet, veuillez activer la création d'équipe côté client dans le tableau de bord Stack Auth (Projet > Paramètres d'équipe). Ce message disparaîtra une fois cette fonctionnalité activée."
            }
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Hero
        capsuleText="La méthode la plus avancée pour réussir le TOEFL"
        capsuleLink="#"
        title="Votre préparation TOEFL réinventée"
        subtitle="Des sujets illimités, des corrections instantanées et des feedbacks sur-mesure, générés par notre IA."
        primaryCtaText="Commencez votre préparation"
        primaryCtaLink={stackServerApp.urls.signUp}
        secondaryCtaText="GitHub"
        secondaryCtaLink="https://github.com/stack-auth/stack-template"
        credits={
          <>
            Conçu avec <TbCoffee className="inline-block" />  par l'équipe de{" "}
            <a
              href="https://www.talk2.org/"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              talk²
            </a>
          </>
        }
      />

      <div id="features" />
      <FeatureGrid
        title="Fonctionnalités"
        subtitle="Débloquez des capacités puissantes pour réussir le TOEFL"
        items={[
          {
            icon: (
              <GraduationCap className="h-8 w-8" />
            ),
            title: "Préparation TOEFL personnalisée",
            description:
              "Notre IA fonctionne par apprentissage adaptatif pour vous fournir des sujets TOEFL en adéquation avec vos axes d'améliorations.",
          },
          {
            icon: (
              <Infinity className="h-8 w-8" />
            ),
            title: "Des sujets TOEFL... à l'infini",
            description:
              "Notre base de données de sujets TOEFL dans les 4 compétences est illimitée. Plus besoin de chercher ailleurs.",
          },
          {
            icon: (
              <SearchCheck className="h-8 w-8" />
            ),
            title: "Corrections instantanées",
            description:
              "A la fin de chaque entraînement, recevez des corrections détaillées et personnalisées sur vos réponses, générées automatiquement pour vous aider à progresser rapidement.",
          },
          {
            icon: <MessageCircleMore className="h-8 w-8" />,
            title: "Feedbacks intelligents et personnalisés",
            description: "Profitez de feedbacks adaptés à vos performances pour comprendre vos erreurs et améliorer vos compétences dans chaque section du TOEFL.",
          },
          {
            icon: <LineChart className="h-8 w-8" />,
            title: "Analyse de progression",
            description: "Suivez vos progrès grâce à des rapports détaillés générés par IA, qui identifient vos points forts et vos axes d'amélioration.",
          },
          {
            icon: <FilePenLine className="h-8 w-8" />,
            title: "Simulation d'examen en conditions réelles",
            description:
              "Préparez-vous avec des simulations d'examen personnalisées et adaptées, pour être prêt le jour J.",
          },
        ]}
      />

      <div id="pricing" />
      <PricingGrid
        title="Tarifs"
        subtitle="Des plans flexibles pour tous les apprenants."
        items={[
          {
            title: "Découverte",
            price: "Gratuit",
            description: "Pour explorer la plateforme et commencer à s'entraîner.",
            features: [
              "Accès à un nombre limité de sujets TOEFL",
              "Feedbacks automatiques de base (sans correction détaillée)",
              "Accès à une simulation d'examen limitée par mois",
              "Rapport de progression simplifié",
              "Accès uniquement aux sections Reading et Listening",
            ],
            buttonText: "Commencer",
            buttonHref: stackServerApp.urls.signUp,
          },
          {
            title: "Essentiel",
            price: "9,90 €",
            description: "Un accompagnement complet pour une progression continue.",
            features: [
              "Accès illimité à tous les sujets TOEFL",
              "Feedbacks intelligents et corrections détaillées pour chaque réponse",
              "Simulations d'examen complètes (jusqu'à 3 par mois)",
              "Rapport de progression détaillé avec analyse des performances",
              "Accès aux 4 sections (Reading, Listening, Speaking, Writing)",
            ],
            buttonText: "Passer au plan Essentiel",
            isPopular: true,
            buttonHref: stackServerApp.urls.signUp,
          },
          {
            title: "Tryhard",
            price: "14,90 €",
            description: "Le plan ultime pour exceller et maîtriser le TOEFL.",
            features: [
              "Accès illimité à tous les sujets TOEFL",
              "Feedbacks intelligents, corrections approfondies et conseils personnalisés en temps réel.",
              "Simulations d'examen illimitées",
              "Rapport de progression avancé avec recommandations spécifiques pour améliorer les performances",
              "Accès aux 4 sections (Reading, Listening, Speaking, Writing)",
              "Plan de préparation personnalisé selon l'échéance de l'examen",
            ],
            buttonText: "Passer en mode tryhard",
            buttonHref: stackServerApp.urls.signUp,
          },
        ]}
      />

    </>
  );
}
