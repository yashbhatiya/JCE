import { motion } from "framer-motion";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Course } from "@shared/schema";
import { Link } from "wouter";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="perspective-1000"
      whileHover={{ scale: 1.05 }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="absolute w-full h-full backface-hidden">
          <div className="h-48 overflow-hidden">
            <img
              src={course.image}
              alt={course.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold">{course.name}</h3>
            <p className="text-gray-600">Duration: {course.duration}</p>
          </div>
        </Card>

        <Card className="absolute w-full h-full backface-hidden rotate-y-180 bg-primary text-white">
          <div className="p-4 flex flex-col h-full justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">{course.name}</h3>
              <p>{course.description}</p>
            </div>
            <Link href="/contact">
              <Button className="w-full bg-yellow-400 text-primary hover:bg-yellow-500">
                Enroll Now
              </Button>
            </Link>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}
