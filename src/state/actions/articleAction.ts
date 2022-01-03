import { ActionType } from "../types/index"

interface ArticleAction {
    type: ActionType.FEED_PAGE,
    payload: number,
}

export type Action = ArticleAction