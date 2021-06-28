import { motion, AnimatePresence } from "framer-motion";
import { Thumbnail } from "./Thumbnail";

export const MainContent = ({ requests }) => {
  let array = requests.results;
  return (
    <div className="flex flex-col sm:m-5 items-center">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-5">
        <AnimatePresence>
          {array.map((e) => (
            <motion.div
              exit={{
                y: 0,
                x: 200,
                opacity: 0,
                scale: 0.7,
              }}
              key={e.id}>
              <Thumbnail allProps={e} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <h2>Made By Alvaro Aquije</h2>
    </div>
  );
};
