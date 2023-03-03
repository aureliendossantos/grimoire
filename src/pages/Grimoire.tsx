import React, { useState } from "react";
import frCardDefinition from "../GrimoireCardDefinition-fr.json";
import enGrimoireDefinition from "../GrimoireDefinition-en.json";
import {
  GrimoireCardDefinition,
  GrimoireDefinition,
  UserGrimoire,
} from "../apiType";
import Filters from "../components/Grimoire/Filters";
import ThemesView from "../components/Grimoire/ThemesView";
import CardsView from "../components/Grimoire/CardsView";
import ListView from "../components/Grimoire/ListView";

export default function Grimoire(props: Props): JSX.Element {
  const cardDefinition: GrimoireCardDefinition = frCardDefinition;
  const grimoireDefinition: GrimoireDefinition = enGrimoireDefinition;

  return (
    <>
      <h2>Navigateur</h2>
      <Filters
        view={props.view}
        showAdvanced={props.showAdvanced}
        filter={props.filter}
        onViewChange={(userInput) => {
          props.onViewChange(userInput);
        }}
        onShowAdvancedChange={(userInput) => {
          props.onShowAdvancedChange(userInput);
        }}
        onFilterChange={(userInput) => {
          props.onFilterChange(userInput);
        }}
      />
      {props.view == "list" ? (
        <ListView
          cardDefinition={cardDefinition}
          grimoireDefinition={grimoireDefinition}
        />
      ) : props.view == "themes" ? (
        <ThemesView
          grimoireDefinition={grimoireDefinition}
          cardCollection={props.userGrimoire.cardCollection}
          bonuses={props.userGrimoire.bonuses}
          showAdvanced={props.showAdvanced}
          filter={props.filter}
        />
      ) : (
        <CardsView
          cardDefinition={cardDefinition}
          cardCollection={props.userGrimoire.cardCollection}
          bonuses={props.userGrimoire.bonuses}
          showAdvanced={props.showAdvanced}
          filter={props.filter}
        />
      )}
    </>
  );
}

interface Props {
  isLoaded: boolean;
  userGrimoire: UserGrimoire;
  view: string;
  showAdvanced: boolean;
  filter: string;
  onViewChange: (userInput: string) => void;
  onShowAdvancedChange: (userInput: boolean) => void;
  onFilterChange: (userInput: string) => void;
}
