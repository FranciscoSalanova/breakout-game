export type GameObject = {
  x: number
  y: number
}

export type Player =
  | GameObject
  | {
      score: number
      lives: number
    }

export type Ball =
  | GameObject
  | {
      dirX: number
      diyY: number
    }
