import { classMerge } from "./index";

describe("classMerge", () => {
  it("should merge class names correctly", () => {
    const result = classMerge("text-lg", "font-bold", "text-red-500");
    expect(result).toBe("text-lg font-bold text-red-500");
  });

  it("should handle empty inputs", () => {
    const result = classMerge();
    expect(result).toBe("");
  });

  it("should merge class names with conflicting Tailwind utilities", () => {
    const result = classMerge(
      "text-lg",
      "text-xl",
      "text-red-500",
      "text-blue-500"
    );
    expect(result).toBe("text-xl text-blue-500");
  });

  it("should merge class names with conditional objects", () => {
    const result = classMerge("text-lg", {
      "font-bold": true,
      "text-red-500": false,
    });
    expect(result).toBe("text-lg font-bold");
  });
});
