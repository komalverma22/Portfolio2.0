import React from "react";
import { skills } from "../../../data/skillData";

// Helper function to chunk array into groups based on screen size
function chunkArray<T>(arr: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

const SkillSection = () => {
  // Create different chunking for different screen sizes
  const mobileSkillRows = chunkArray(skills, 3); // 3 items per row on mobile
  const desktopSkillRows = chunkArray(skills, 4); // 4 items per row on desktop

  return (
    <section className="w-full flex flex-col items-center mt-16 mb-12">
      {/* Mobile Skills (3 per row) - visible on small screens */}
      <div className="w-full flex flex-col items-center gap-3 mt-37 sm:hidden">
        {mobileSkillRows.map((row, rowIdx) => (
          <div
            key={`mobile-${rowIdx}`}
            className="flex flex-row justify-center items-center gap-x-2 mb-3 w-full px-4"
          >
            {row.map((skill) => (
              <div
                key={`mobile-${skill.name}`}
                className="flex-1 min-w-0 h-[40px] max-w-[110px] bg-[#FFEDED] flex items-center justify-center text-[#891c53] text-xs font-semibold border-2 border-[#670045] shadow-[-2px_3px_0px_0px_#670045] "
              >
                <span className="truncate px-1">{skill.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Desktop Skills (4 per row) - visible on medium screens and up */}
      <div className="w-full hidden sm:flex flex-col mx-4 items-center gap-3 mt-37 sm:mt-75">
        {desktopSkillRows.map((row, rowIdx) => (
          <div
            key={`desktop-${rowIdx}`}
            className="flex flex-row justify-center items-center gap-x-4 md:gap-x-6 mb-3 md:mb-5 w-full"
          >
            {row.map((skill) => (
              <div
                key={`desktop-${skill.name}`}
                className={`h-[48px] md:h-[56px] ${skill.width || 'w-32'} bg-[#FFEDED] flex items-center justify-center text-[#891c53] text-sm md:text-lg lg:text-xl font-semibold border-2 border-[#670045] shadow-[-3px_4px_0px_0px_#670045] `}
              >
                {skill.name}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;