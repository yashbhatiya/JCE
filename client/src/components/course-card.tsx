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
    <div className="h-[400px] relative perspective-[1000px]">
      <motion.div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.6s"
        }}
      >
        {/* Front of card */}
        <Card 
          className="absolute w-full h-full p-4 cursor-pointer backface-hidden hover:scale-105 transition-transform"
          onClick={() => setIsFlipped(true)}
        >
          <div className="h-48 mb-4">
            <img
              src={course.image}
              alt={course.name}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">{course.name}</h3>
            <p className="text-muted-foreground">Duration: {course.duration}</p>
          </div>
        </Card>

        {/* Back of card */}
        <Card 
          className="absolute w-full h-full p-6 cursor-pointer backface-hidden bg-primary text-white"
          style={{ transform: "rotateY(180deg)" }}
          onClick={() => setIsFlipped(false)}
        >
          <div className="flex flex-col h-full justify-between">
            <div>
              <h3 className="text-xl font-bold mb-4">{course.name}</h3>
              <p className="text-gray-100">{course.description}</p>
            </div>
            <Link href={`/contact?course=${course.id}`}>
              <Button className="w-full bg-yellow-400 text-primary hover:bg-yellow-500 mt-4">
                Enroll Now
              </Button>
            </Link>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}