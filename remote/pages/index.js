import { SimpleGrid, WrapItem, Box } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Card from "../components/Card";
import Pagination from "@/components/Pagination";
import FilterButton from "@/components/FilterButton";
import { initialCardDataArray } from "@/components/demoData";
import dynamic from "next/dynamic";

const HostComponent = dynamic(() => import("host/SearchBox"), { ssr: false });

function index() {
  const [filteredCards, setFilteredCards] = useState(initialCardDataArray);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (searchTerm) => {
    const filteredCards = initialCardDataArray.filter((card) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCards(filteredCards);
    setCurrentPage(1);
  };

  const handleClear = () => {
    setFilteredCards(initialCardDataArray);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const itemsPerPage = 6; // Number of cards per page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedCards = filteredCards.slice(startIndex, endIndex);

  // totalPages whenever filteredCards changes
  const totalPages = Math.ceil(filteredCards.length / itemsPerPage);

  return (
    <>
      <Header />
      <Box
        display="flex"
        alignItems="center"
        pt={20}
        pr={5}
        backgroundColor="white"
      >
        <HostComponent onSearch={handleSearch} onClear={handleClear} />
        <FilterButton />
      </Box>

      <SimpleGrid columns={[1, 2, 4]}>
        {displayedCards.map((cardData, index) => (
          <WrapItem key={index}>
            <Card cardData={cardData} />
          </WrapItem>
        ))}
      </SimpleGrid>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
      <Footer />
    </>
  );
}

export default index;
