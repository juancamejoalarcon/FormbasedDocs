import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
    Query,
} from '@nestjs/common';

@Controller('search')
export class SearchController {
    @Get()
    findAll(@Query() query): string {
      return 'This action returns all forms';
    }
}
